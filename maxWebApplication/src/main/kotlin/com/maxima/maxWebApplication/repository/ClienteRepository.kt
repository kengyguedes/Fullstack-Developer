package com.maxima.maxWebApplication.repository

import com.maxima.maxWebApplication.model.Cliente
import org.springframework.data.mongodb.repository.MongoRepository

interface ClienteRepository: MongoRepository<Cliente, String> {
}