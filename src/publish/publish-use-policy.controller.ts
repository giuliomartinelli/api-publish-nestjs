import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { TaskUsePolicyInstallDto } from './dto/task-use-policy-install.dto';
import { TaskUsePolicyUninstallDto } from './dto/task-use-policy-uninstall.dto';
import { TaskUsePolicyApplicationInstallDto } from './dto/task-use-policy-application-install.dto';
import { TaskUsePolicyApplicationUninstallDto } from './dto/task-use-policy-application-uninstall.dto';
import { TaskUsePolicyApplicationUpdateDto } from './dto/task-use-policy-application-update.dto';
import { TaskUsePolicyScreenDto } from './dto/task-use-policy-screen.dto';
import { TaskUsePolicyRestrictionDto } from './dto/task-use-policy-restriction.dto';
import { TaskUsePolicyKioskDto } from './dto/task-use-policy-kiosk.dto';
import { TaskUsePolicyDefinitionDto } from './dto/task-use-policy-definition.dto';
import { PublishService } from './publish.service';

@Controller('publish/use-policy')
export class PublishUsePolicyController {
  constructor(private readonly publishService: PublishService) {}

  @Post('install')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyInstall(@Body() task: TaskUsePolicyInstallDto): void {
    this.publishService.usePolicyInstall(task);
    return;
  }

  @Post('uninstall')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyUninstall(@Body() task: TaskUsePolicyUninstallDto): void {
    this.publishService.usePolicyUninstall(task);
    return;
  }

  @Post('screen')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyScreen(@Body() task: TaskUsePolicyScreenDto): void {
    this.publishService.usePolicyScreen(task);
    return;
  }

  @Post('restriction')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyRestriction(@Body() task: TaskUsePolicyRestrictionDto): void {
    this.publishService.usePolicyRestriction(task);
    return;
  }

  @Post('kiosk')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyKiosk(@Body() task: TaskUsePolicyKioskDto): void {
    this.publishService.usePolicyKiosk(task);
    return;
  }

  @Post('definition')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyDefinition(@Body() task: TaskUsePolicyDefinitionDto): void {
    this.publishService.usePolicyDefinition(task);
    return;
  }

  @Post('application-install')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyApplicationInstall(
    @Body() task: TaskUsePolicyApplicationInstallDto,
  ): void {
    this.publishService.usePolicyApplicationInstall(task);
    return;
  }

  @Post('application-uninstall')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyApplicationUninstall(
    @Body() task: TaskUsePolicyApplicationUninstallDto,
  ): void {
    this.publishService.usePolicyApplicationUninstall(task);
    return;
  }

  @Post('application-update')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyApplicationUpdate(
    @Body() task: TaskUsePolicyApplicationUpdateDto,
  ): void {
    this.publishService.usePolicyApplicationUpdate(task);
    return;
  }
}
