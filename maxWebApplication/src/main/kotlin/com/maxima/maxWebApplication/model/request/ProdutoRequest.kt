package com.maxima.maxWebApplication.model.request

class ProdutoRequest(
        val codigo: String,
        val nome: String,
        val precoUnitario: Double,
        val imagemUrl: String? = null
)