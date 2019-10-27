import { PostModel } from './post.model';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';

class CreatePostDto {
  @ApiModelProperty({ description: '帖子标题' })
  title: string;
  @ApiModelProperty({ description: '帖子内容' })
  content: string;
}

@Controller('posts')
@ApiUseTags('posts')
export class PostsController {
  @Get()
  @ApiOperation({ title: '帖子列表' })
  async index() {
    return await PostModel.find();
  }

  @Post()
  @ApiOperation({ title: '创建帖子' })
  create(@Body() body: CreatePostDto) {
    body;
    return {
      success: true,
    };
  }

  @Get(':id')
  @ApiOperation({ title: '帖子详情' })
  detail(@Param('id') id: string) {
    return {
      id: id,
      title: 'lxx',
    };
  }

  @Put(':id')
  @ApiOperation({ title: '编辑帖子' })
  update(@Param('id') id: string, @Body() body: CreatePostDto) {
    return {
      success: true,
    };
  }

  @Delete(':id')
  @ApiOperation({ title: '删除帖子' })
  remove(@Param('id') id: string) {
    return {
      success: true,
    };
  }
}
