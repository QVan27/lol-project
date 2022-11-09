<?php

namespace tests\controllers;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;


class KeyJsonControllerTest extends WebTestCase {

    // Test fonctionnel pour savoir si la clé matchId exite 
    
    public function testKey($name = 'azerty'){
        $client = static::createClient();
        $client->request('GET', 'http://localhost:8000/bdd/'.$name.'/matches/EUW1_6138061137');
        $response = $client->getResponse();
        $this->assertSame(200, $response->getStatusCode());
        $array = json_decode($response->getContent(), true);
        $this->assertArrayHasKey('matchId', $array[0]['timeline']['metadata'], 'Cette clé n\'existe pas');
    }

}