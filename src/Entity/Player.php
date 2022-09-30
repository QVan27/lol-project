<?php

namespace App\Entity;

use App\Repository\PlayerRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlayerRepository::class)]
class Player
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private array $playerjson = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPlayerjson(): array
    {
        return $this->playerjson;
    }

    public function setPlayerjson(array $playerjson): self
    {
        $this->playerjson = $playerjson;

        return $this;
    }
}
