<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221005132318 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE matches ADD timeline LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE timelines DROP FOREIGN KEY FK_BF99F5A0C12EE1F6');
        $this->addSql('DROP INDEX UNIQ_BF99F5A0C12EE1F6 ON timelines');
        $this->addSql('ALTER TABLE timelines DROP match_id_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE matches DROP timeline');
        $this->addSql('ALTER TABLE timelines ADD match_id_id INT NOT NULL');
        $this->addSql('ALTER TABLE timelines ADD CONSTRAINT FK_BF99F5A0C12EE1F6 FOREIGN KEY (match_id_id) REFERENCES matches (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_BF99F5A0C12EE1F6 ON timelines (match_id_id)');
    }
}
