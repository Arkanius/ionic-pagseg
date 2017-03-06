fluxo pagSeguro:

getSessionId: API BACK;
PagSeguroDirectPayment.getPaymentMethods: PAGSEGURO JS
	pega os métodos de pagamento do js do pagseguro
	(Não esquecer de verificar as mudanças dos estados internos do angular2
	com o ChangeDetectorRef.detectChanges)
	;
PagSeguroDirectPayment.getBrand:  PAGSEGURO JS
	Detecta qual a bandeira de cartão do usuário, passar o "cardBin";

