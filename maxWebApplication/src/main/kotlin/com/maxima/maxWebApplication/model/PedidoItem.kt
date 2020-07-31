package com.maxima.maxWebApplication.model

import org.springframework.data.mongodb.core.mapping.Document

@Document
data class PedidoItem(val numped: Int,
                      val codprod: String,
                      val qtd: Int,
                      val precoUnitario: Double)