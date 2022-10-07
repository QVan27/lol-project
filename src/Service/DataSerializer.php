<?php

namespace App\Service;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class DataSerializer
{
    /**
     * @var serializer
     */
    private $serializer;

    /**
     * ApiController fetch BBD constructor.
     */
    public function __construct()
    {
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);
        $this->serializer = new Serializer([$normalizer], [new JsonEncoder()]);
    }

    public function serialize($object): string
    {
        return $this->serializer->serialize($object, 'json');
    }
}
