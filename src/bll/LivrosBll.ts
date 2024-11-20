import { LivrosDal } from "../dal/LivrosDal.js";
import { LivrosModel } from "../models/LivrosModel.js";

export class LivroBll {
    static async selectLivros(idUsuario: number): Promise<LivrosModel[]> { 
        if (idUsuario <= 0) {
            throw (console.log(2));
        } 

        try {
            return await LivrosDal.selectLivros(idUsuario);
        } catch (error: any) {
            throw error.message;
        }
    }
}