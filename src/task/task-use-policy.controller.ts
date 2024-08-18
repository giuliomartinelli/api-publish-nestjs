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
import { TaskService } from './task.service';

@Controller('task/use-policy')
export class TaskUsePolicyController {
  constructor(private readonly taskService: TaskService) {}

  @Post('install')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyInstall(@Body() task: TaskUsePolicyInstallDto): void {
    console.log('task/use-policy/install',task);
    this.taskService.usePolicyInstall(task);
    return;
  }

  @Post('uninstall')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyUninstall(@Body() task: TaskUsePolicyUninstallDto): void {
    this.taskService.usePolicyUninstall(task);
    return;
  }

  @Post('screen')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyScreen(@Body() task: TaskUsePolicyScreenDto): void {
    this.taskService.usePolicyScreen(task);
    return;
  }

  @Post('restriction')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyRestriction(@Body() task: TaskUsePolicyRestrictionDto): void {
    this.taskService.usePolicyRestriction(task);
    return;
  }

  @Post('kiosk')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyKiosk(@Body() task: TaskUsePolicyKioskDto): void {
    this.taskService.usePolicyKiosk(task);
    return;
  }

  @Post('definition')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyDefinition(@Body() task: TaskUsePolicyDefinitionDto): void {
    this.taskService.usePolicyDefinition(task);
    return;
  }

  @Post('application-install')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyApplicationInstall(
    @Body() task: TaskUsePolicyApplicationInstallDto,
  ): void {
    this.taskService.usePolicyApplicationInstall(task);
    return;
  }

  @Post('application-uninstall')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyApplicationUninstall(
    @Body() task: TaskUsePolicyApplicationUninstallDto,
  ): void {
    this.taskService.usePolicyApplicationUninstall(task);
    return;
  }

  @Post('application-update')
  @HttpCode(HttpStatus.ACCEPTED)
  usePolicyApplicationUpdate(
    @Body() task: TaskUsePolicyApplicationUpdateDto,
  ): void {
    this.taskService.usePolicyApplicationUpdate(task);
    return;
  }
}
