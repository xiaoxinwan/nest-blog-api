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
import { IsNotEmpty } from 'class-validator';

class CreatePostDto {
  @ApiModelProperty({ description: '帖子标题', example: '帖子标题111' })
  @IsNotEmpty({message: '请填写标题'})
  title: string;
  @ApiModelProperty({ description: '帖子内容', example: '帖子内容111' })
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
  async create(@Body() createPostDto: CreatePostDto) {
    await PostModel.create(createPostDto);
    return {
      success: true,
    };
  }

  @Get(':id')
  @ApiOperation({ title: '帖子详情' })
  async detail(@Param('id') id: string) {
    return await PostModel.findById(id);
  }

  @Put(':id')
  @ApiOperation({ title: '编辑帖子' })
  async update(@Param('id') id: string, @Body() updatePostDto: CreatePostDto) {
    await PostModel.findByIdAndUpdate(id, updatePostDto);
    return {
      success: true,
    };
  }

  @Delete(':id')
  @ApiOperation({ title: '删除帖子' })
  async remove(@Param('id') id: string) {
    await PostModel.findByIdAndDelete(id);
    return {
      success: true,
    };
  }
}
