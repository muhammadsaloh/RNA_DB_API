import {
  Controller,
  Get,
  Query,
  UseGuards,
  Request,
  HttpStatus,
} from '@nestjs/common';
import { LocusService } from './locus.service';
import { GetLocusQueryParamsDto, LocusDto } from './locus.dto';
import { AuthGuard } from '../common/guards/auth.guard';
import { UserDto } from '../user/user.dto';
import { Locus } from './locus.entity';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Locus')
@Controller('locus')
export class LocusController {
  constructor(private readonly locusService: LocusService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [LocusDto] })
  public async getLocus(
    @Query()
    params: GetLocusQueryParamsDto,
    @Request() req: Request & { user: Omit<UserDto, 'password'> },
  ): Promise<Locus[]> {
    return this.locusService.getLocus(params, req.user.role);
  }
}
