package com.maxima.maxWebApplication

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class MaxWebApplication

fun main(args: Array<String>) {
	runApplication<MaxWebApplication>(*args)
}
