package com.maxima.maxWebApplication.repository

import com.maxima.maxWebApplication.model.Produto
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.repository.query.Param

interface ProdutoRepository: MongoRepository<Produto,String>{

}