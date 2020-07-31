package com.maxima.maxWebApplication.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import javax.annotation.processing.Generated

@Document
data class Cliente(
        @Id
        var id: ObjectId = ObjectId.get(),
        var codigo: Long,
        var nome: String
)