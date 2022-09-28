<?php

namespace App\Controller;

use App\Entity\APIJSON;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\CallApiService;

class ApiJsonController extends AbstractController
{

    #[Route('/json', name: 'app_create_api_json')]
    public function createApiJson(ManagerRegistry $doctrine, CallApiService $callApiService): Response
    {
        $entityManager = $doctrine->getManager();

        $apijson = new APIJSON();
        $apijson->setJsonScript($callApiService->getData());
        

        $entityManager->persist($apijson);

        $entityManager->flush();

        return new Response('test'.$apijson->getId());
    }
}
