import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  async createUser(body): Promise<string> {
    if (!body || !body.name) {
      return JSON.stringify({ error: 'name は必須項目です' });
    }
    const result = await new AppRepository().create(body);
    return JSON.stringify(result.Attributes);
  }

  async getUsers(): Promise<string> {
    const result = await new AppRepository().getAll();
    return JSON.stringify(result.Items);
  }
}
