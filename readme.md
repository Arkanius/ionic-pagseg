fluxo pagSeguro::

getSessionId: API BACK;
PagSeguroDirectPayment.getPaymentMethods: PAGSEGURO JS
	pega os métodos de pagamento do js do pagseguro
	(Não esquecer de verificar as mudanças dos estados internos do angular2
	com o ChangeDetectorRef.detectChanges)
	;
PagSeguroDirectPayment.getBrand:  PAGSEGURO JS
	Detecta qual a bandeira de cartão do usuário, passar o "cardBin";


PagSeguroDirectPayment.createCardToken:  PAGSEGURO JS
	Cria o token de pagamento passando as informações do cartão (numero, cvv, mes, ano, bandeira);


---------------------
PagSeguroDirectPaymentRequest: API BACK;
	passar as  informações de compra;


PagSeguroDirectPayment.getSenderHash: PAGSEGURO JS
	cria hash do usuário;
