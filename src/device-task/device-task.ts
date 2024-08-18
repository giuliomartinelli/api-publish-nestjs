import { Injectable } from '@nestjs/common';
import { EquipementDto } from 'src/task/dto/equipement.dto';
import { UsePolicyApplicationDto } from 'src/task/dto/use-policy-application.dto';
import { UsePolicyDefinitionDto } from 'src/task/dto/use-policy-definition.dto';
import { UsePolicyKioskDto } from 'src/task/dto/use-policy-kiosk.dto';
import { UsePolicyRestrictionDto } from 'src/task/dto/use-policy-restriction.dto';
import { UsePolicyScreenDto } from 'src/task/dto/use-policy-screen.dto';

@Injectable()
export class DeviceTask {
  create(task) {
    task;
    return;
  }
}

//equipmentMessage
//basicSoftware
//equipementStatus
//geofence
