## 🧩 **Exercício Proposto: “Contador com Botões de + e -” (20 min)**

### 🎯 Desafio:

Crie um componente chamado `ControleDeContador` com:

- Um número exibido na tela (iniciando em 0).
- Dois botões:
    - `+` para aumentar 1.
    - `–` para diminuir 1.
- O valor nunca pode ser menor que 0.

### ✅ Regras:

- Usar `useState`.
- Utilizar `setNumero` para atualizar o valor.
- Bloquear o número negativo com uma verificação no botão de subtração.

---

### 💡 Dica:

```jsx
function diminuir() {
  if (numero > 0) {
    setNumero(numero - 1);
  }
}

```
