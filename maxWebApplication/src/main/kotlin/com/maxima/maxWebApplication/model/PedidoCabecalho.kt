package com.maxima.maxWebApplication.model

import org.springframework.data.mongodb.core.mapping.Document

@Document
class PedidoCabecalho (
        val numped:Int,
        val codCliente: String,
        val valorFrete: Double,
        val valorpedido: Double

)