<?php

namespace App\tests\Controller;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;



class BddControllerTest extends WebTestCase
{
    public function testRouteApi()
    {
        // Test if the route is accessible
        $client = static::createClient();
        $client->request('GET', '/bdd/azerty/matches');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
     

       
        
       
    }
   
}



