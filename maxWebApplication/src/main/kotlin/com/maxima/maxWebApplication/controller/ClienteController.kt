package com.maxima.maxWebApplication.controller

import com.maxima.maxWebApplication.model.Cliente
import com.maxima.maxWebApplication.model.Produto
import com.maxima.maxWebApplication.model.request.ClienteRequest
import com.maxima.maxWebApplication.model.request.ProdutoRequest
import com.maxima.maxWebApplication.repository.ClienteRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("cliente")
class ClienteController(private val _clienteRepository: ClienteRepository) {

    @GetMapping
    fun listarTodosClientes() = ResponseEntity.ok(_clienteRepository.findAll())

    @GetMapping("{/nome}")
    fun listarCliente(@PathVariable("nome") nome: String) = ResponseEntity.ok(_clienteRepository.findById(nome))

    @PostMapping
    fun gravaCliente(@RequestBody clienteBody: ClienteRequest): ResponseEntity<Cliente> {

        val cliente = _clienteRepository.save(Cliente(
                nome = clienteBody.nome,
                codigo = clienteBody.codigo
        ))
        return ResponseEntity(cliente, HttpStatus.CREATED)
    }
}