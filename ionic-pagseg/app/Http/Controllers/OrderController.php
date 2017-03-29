<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $method = $request->method;
        // $items = $request->get('items');
        $hash = $request->hash;
        $total = $request->total;
        $token = $request->token;
        $directPaymentRequest = new \PagSeguroDirectPaymentRequest();
        $directPaymentRequest->setPaymentMode('DEFAULT'); // GATEWAY
        $directPaymentRequest->setPaymentMethod($method);
        $directPaymentRequest->setCurrency("BRL");
        
/*        $items = [
        	[
	        	'name' => 'Item Test1',
	        	'price' => 55,
	        	'amount' => 10,

        	],
        ];


        foreach ($items as $key => $item){
            // $directPaymentRequest->addItem("0001", 'Item Test1', $item->quantity, $item->value);
        }*/
        
        $directPaymentRequest->addItem("0001", 'Item Test1', 1, 55.00);

        // INFORMAÇÕES DO USUÁRIO
        $directPaymentRequest->setSender(
            'João Comprador',
            'joao@sandbox.pagseguro.com.br',
            '11',
            '56273440',
            'CPF',
            '156.009.442-76'
        );

        $directPaymentRequest->setSenderHash($hash);
        
        $installments = new \PagSeguroDirectPaymentInstallment([
            'quantity' => 1,
            'value' => $total
        ]);

        // dd($total);

        $sedexCode = \PagSeguroShippingType::getCodeByType('SEDEX');
        $directPaymentRequest->setShippingType($sedexCode);
        $directPaymentRequest->setShippingAddress(
            '01452002',
            'Av. Brig. Faria Lima',
            '1384',
            'apto. 114',
            'Jardim Paulistano',
            'São Paulo',
            'SP',
            'BRA'
        );

        $billingAddress = new \PagSeguroBilling(
            array(
                'postalCode' => '01452002',
                'street' => 'Av. Brig. Faria Lima',
                'number' => '1384',
                'complement' => 'apto. 114',
                'district' => 'Jardim Paulistano',
                'city' => 'São Paulo',
                'state' => 'SP',
                'country' => 'BRA'
            )
        );

        $creditCardData = new \PagSeguroCreditCardCheckout(
            array(
                'token' => $token,
                'installment' => $installments,
                'billing' => $billingAddress,
                'holder' => new \PagSeguroCreditCardHolder(
                    array(
                        'name' => 'João Comprador',
                        'birthDate' => date('01/10/1979'),
                        'areaCode' => '11',
                        'number' => '56273440',
                        'documents' => array(
                            'type' => 'CPF',
                            'value' => '156.009.442-76'
                        )
                    )
                )
            )
        );

        $directPaymentRequest->setCreditCard($creditCardData);
        
        try {
            $credentials = \PagSeguroConfig::getAccountCredentials(); // getApplicationCredentials()
            $response = $directPaymentRequest->register($credentials);
            
            return [
                'success' => true,
            ];
        } catch (\PagSeguroServiceException $e) {
            return [
                'message' => $e->getMessage(),
                'success' => false
            ];
        }
    }
}
