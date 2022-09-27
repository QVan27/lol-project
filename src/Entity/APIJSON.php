<?php

namespace App\Entity;

use App\Repository\APIJSONRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: APIJSONRepository::class)]
class APIJSON
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private array $json_script = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getJsonScript(): array
    {
        return $this->json_script;
    }

    public function setJsonScript(array $json_script): self
    {
        $this->json_script = $json_script;

        return $this;
    }
}
