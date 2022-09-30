<?php

namespace App\Entity;

use App\Repository\MatchTimelineRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MatchTimelineRepository::class)]
class MatchTimeline
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private array $matchtimelinejson = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMatchtimelinejson(): array
    {
        return $this->matchtimelinejson;
    }

    public function setMatchtimelinejson(array $matchtimelinejson): self
    {
        $this->matchtimelinejson = $matchtimelinejson;

        return $this;
    }
}
