<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\CallApiService;


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
}
