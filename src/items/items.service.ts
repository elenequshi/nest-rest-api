import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

import { Model } from 'mongoose';
import { InjectModel} from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  

    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {} // aq is 'Item' aris romelic  foreFeature: names mivaniche

    async findAll(): Promise<Item[]> {
      return await this.itemModel.find().exec();
    }

    async findOne(id): Promise<Item> {
        return await this.itemModel.findOne({ _id : id }); 
    }

    async create(item: Item) : Promise<Item> {
        let newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async update(id, item ): Promise<Item> {
       return await  this.itemModel.findByIdAndUpdate(id, item, {new: true}  );
    }

    async delete(id): Promise<Item> {
        let removeItem = this.itemModel.findOne({_id: id});
        return await removeItem.remove();
    }
    
}
