package com.example.aula.service;

import com.example.aula.model.Prato;
import com.example.aula.repository.PratoRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Service
@Validated
public class PratoService {

    private final PratoRepository pratoRepository;

    public PratoService(PratoRepository pratoRepository) {
        this.pratoRepository = pratoRepository;
    }

    public List<Prato> listarTodos() {
        return pratoRepository.findAll();
    }

    public Prato salvar(@Valid Prato prato) {
        return pratoRepository.save(prato);
    }

    public Prato atualizar(@Valid Prato prato) {
        Prato existente = pratoRepository.findById(prato.getId())
                .orElseThrow(() -> new IllegalArgumentException("Prato não encontrado."));
        return pratoRepository.save(prato);
    }

    public void excluir(Long id) {
        if (!pratoRepository.existsById(id)) {
            throw new IllegalArgumentException("Prato não encontrado.");
        }
        pratoRepository.deleteById(id);
    }
}
