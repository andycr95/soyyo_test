import axios from "axios"
import { Entity } from "../types";


export default class EntityController {

    // Listar todas las entidades desde endpoint
    public static async getEntities (startId: number, endId: number): Promise<Entity[]> {
        const entities: Entity[] = [];
        for (let i = startId; i <= endId; i++) {
            const response = await axios.get(`${process.env.API_URL}/entities/${i}`);
            const isEmpty = Object.keys(response.data.data).length === 0;
            if (!isEmpty) entities.push(response.data.data);
        }
        return entities;
    }

}