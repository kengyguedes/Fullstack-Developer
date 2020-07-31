package com.maxima.maxWebApplication.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Produto(
        @Id
        var id: ObjectId = ObjectId.get(),
        var codigo: String,
        var nome: String,
        var precoUnitario: Double,
        var imagemUrl: String?
)