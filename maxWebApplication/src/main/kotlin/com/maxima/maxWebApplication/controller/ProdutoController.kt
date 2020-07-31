package com.maxima.maxWebApplication.controller

import com.maxima.maxWebApplication.model.Produto
import com.maxima.maxWebApplication.model.request.ProdutoRequest
import com.maxima.maxWebApplication.repository.ProdutoRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("produto")
class ProdutoController(private val _produtoRepository: ProdutoRepository) {

    @GetMapping
    fun listarTodosProduto() = ResponseEntity.ok(_produtoRepository.findAll())

    @GetMapping("{/codigo}")
    fun listarProduto(@PathVariable("codigo") codigo: String) = ResponseEntity.ok(_produtoRepository.findById(codigo))

    @PostMapping
    fun gravaProdutos(@RequestBody produtoBody: ProdutoRequest): ResponseEntity<Produto> {

        val produto = _produtoRepository.save(Produto(
                nome = produtoBody.nome,
                codigo = produtoBody.codigo,
                imagemUrl = produtoBody.imagemUrl,
                precoUnitario = produtoBody.precoUnitario
        ))
        return ResponseEntity(produto, HttpStatus.CREATED)
    }
}