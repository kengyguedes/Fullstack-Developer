package com.maxima.maxWebApplication.repository

import com.maxima.maxWebApplication.model.Produto
import org.springframework.data.mongodb.repository.MongoRepository

interface ProdutoRepository: MongoRepository<Produto,String>{
}