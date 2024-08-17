import { Injectable } from '@nestjs/common';
import { EquipementDto } from 'src/publish/dto/equipement.dto';
import { UsePolicyApplicationDto } from 'src/publish/dto/use-policy-application.dto';
import { UsePolicyDefinitionDto } from 'src/publish/dto/use-policy-definition.dto';
import { UsePolicyKioskDto } from 'src/publish/dto/use-policy-kiosk.dto';
import { UsePolicyRestrictionDto } from 'src/publish/dto/use-policy-restriction.dto';
import { UsePolicyScreenDto } from 'src/publish/dto/use-policy-screen.dto';

@Injectable()
export class Queue {
  publish(
    topic: string,
    payload:
      | UsePolicyScreenDto
      | UsePolicyRestrictionDto
      | UsePolicyKioskDto
      | UsePolicyDefinitionDto
      | UsePolicyApplicationDto,
    equipment: EquipementDto,
  ) {
    topic;
    payload;
    equipment;
    return 'This action adds a new mqtt';
  }
}
