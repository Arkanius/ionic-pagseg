<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class TestsController extends Controller
{
     public function getSessionId()
    {
/*    	$credentials = \PagSeguroConfig::getAccountCredentials();

    	return [
    		'sessionId' => \PagSeguroSessionService::getSession($credentials);
    	];*/
    	return 'bunda';
    }
}
