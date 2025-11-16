# 🎨 Portfólio Pessoal

Um portfólio moderno, responsivo e com animações, desenvolvido com React, Tailwind CSS e Framer Motion para exibir meus projetos e habilidades como desenvolvedor full-stack.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional com gradientes e efeitos glassmorphism
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **Animações Suaves**: Animações realizadas com Framer Motion e Tailwind CSS
- **Seções Organizadas**:
  - Hero Section com chamada à ação
  - Habilidades e Tecnologias
  - Experiência Profissional e Educação
  - Projetos Recentes
  - Seção de Contato
  - Footer com links sociais
- **Navegação Intuitiva**: Menu fixo com navegação suave
- **Modo Mobile-First**: Desenvolvido pensando em dispositivos móveis

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca UI
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Biblioteca de animações
- **React Icons** - Ícones SVG

### Desenvolvimento
- **JavaScript/JSX** - Linguagem de programação
- **CSS3** - Estilização avançada

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn

### Instalação e Execução

1. **Clone ou abra o repositório**
```bash
cd portfolio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Build para Produção

```bash
npm run build
```

O resultado será gerado na pasta `dist/`.

### Preview do Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Cabeçalho com navegação
│   │   ├── Hero.jsx          # Seção inicial
│   │   ├── Skills.jsx        # Habilidades e tecnologias
│   │   ├── Experience.jsx    # Experiência profissional e educação
│   │   ├── Projects.jsx      # Projetos recentes
│   │   ├── Contact.jsx       # Seção de contato
│   │   └── Footer.jsx        # Rodapé
│   ├── App.jsx               # Componente principal
│   ├── index.css             # Estilos globais com Tailwind
│   └── main.jsx              # Entrada da aplicação
├── public/                   # Arquivos estáticos
├── tailwind.config.js        # Configuração do Tailwind
├── vite.config.js            # Configuração do Vite
└── package.json              # Dependências do projeto
```

## 🎯 Funcionalidades Principais

### Header/Navegação
- Menu responsivo com hamburger para mobile
- Links suave para cada seção
- Logo com efeito hover animado

### Hero Section
- Apresentação inicial com gradiente animado
- Botões de ação com efeito hover
- Links para GitHub, LinkedIn, Email e Telefone

### Skills
- Cards com categorias de habilidades
- Animações ao passar o mouse
- Destaque de destaques profissionais

### Experience
- Timeline de experiência profissional
- Detalhes de educação
- Tags de tecnologias utilizadas

### Projects
- Grid responsivo de projetos
- Cards com descrição, features e tecnologias
- Links para GitHub e projetos ao vivo
- Destaque para projetos em desenvolvimento

### Contact
- Métodos de contato clicáveis
- Cards animados com ícones
- Chamada à ação com botões

## 🎨 Customização

### Cores e Temas

Edite `tailwind.config.js` para customizar as cores:

```javascript
theme: {
  extend: {
    colors: {
      // Adicione suas cores aqui
    }
  }
}
```

### Conteúdo

Todo o conteúdo está nos componentes em `src/components/`:
- Altere textos, links e informações conforme necessário
- Adicione seus projetos em `Projects.jsx`
- Atualize suas habilidades em `Skills.jsx`

### Animações

As animações podem ser ajustadas em `tailwind.config.js` na seção `animation` e `keyframes`.

## 📱 Responsividade

O projeto utiliza breakpoints do Tailwind CSS:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔗 Links Importantes

- **GitHub**: https://github.com/yBardockZ
- **LinkedIn**: https://www.linkedin.com/in/thalles-leopoldino
- **Email**: thalles_leopoldino@outlook.com
- **Telefone**: (21) 96561-5548

## 📄 Sobre

Portfólio de **Thalles da Rocha Leopoldino**, desenvolvedor full-stack apaixonado por criar APIs robustas com Java e Spring Boot, bem como aplicações web modernas com React.

- **Experiência**: 2 anos de estudo + 5 meses de experiência prática
- **Localização**: Fonseca, Niterói - RJ
- **Educação**: Ciência da Computação - 7° período (Faculdade Descomplica)

## 📝 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como inspiração ou base para seu próprio portfólio.

---

Desenvolvido usando React + Tailwind CSS + Framer Motion
