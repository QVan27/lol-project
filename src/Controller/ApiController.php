<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\CallApiService;
use App\Controller\ManagerRegistry;
use App\Repository\ClassesRepository;
use Doctrine\ORM\EntityManger;
use App\Repository\APIJSONRepository;
use App\Entity\APIJSON;


class ApiController extends AbstractController
{


    #[Route('/api', name: 'app_api')]
    public function index(CallApiService $callApiService): Response
    {
        
        dd($callApiService->getData());
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
            'data' => $callApiService->getData(),
            
            
        ]);
   
    }

    #[Route('/script_json', name: 'script_json')]
    public function showJson() : Response
    {
        $json = $this->getDoctrine()
            ->getRepository(APIJSON::class)->findAll();
        
        // return $this->render('api/index.html.twig', [
        //     'json' =>$json
        // ]);
        dd($json);

    }

    

}
