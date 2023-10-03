# Instruções de utilização

## Necessário

<!--
## Instalação do App

```bash
git clone <url>

```
```bash
cd pmv-ads-2023-2-e3-proj-mov-t3-time2-app
```

```bash
cd src
```

```bash
npx expo install react-dom react-native-web @expo/webpack-config
```

```bash
npx expo start
```
-->
- Download do Node.js e Git
- [Node.js **LTS**](https://nodejs.org/)
- [Git](https://git-scm.com/)
- **Se estiver usando Expo.dev: download do zip do Expo.dev**
  - Descompactar zip
  - Abrir pasta no VSCode
  - Instalar extensão do VSCode [Expo Tools](https://marketplace.visualstudio.com/items?itemName=expo.vscode-expo-tools)
- Abrir terminal e digitar um de cada vez
  - `npm install expo` - faz download das dependências do expo e cria a pasta `node_modules` dentro do projeto
  - `npx expo install react-dom react-native-web @expo/webpack-config` - download da dependência para visualizar o app no navegador
    >> algumas funcionalidades só funcionam em um celular, então é sempre bom ter o app Expo Go instalado no seu celular e usar o QRCode para sincronizar o seu app com o seu dispositivo.
- Para iniciar o projeto: `npx expo start`
  
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-time2-app/assets/70844369/d499c1a9-26bb-4683-9315-d202fcd3a335)

- Digite `w` para aparecer o app no navegador "open web"
- Dependências Navigation:
  - `npm install @react-navigation/native`
  - `npm install react-navigation`
  - `npx expo install @react-native-community/datetimepicker@6.7.3`
>>Caso algum comando falhe e não execute corretamente ao fazer download de dependências execute os comandos com `--force` no final, como em:
>>`npm install #react-navigation/native --force`

## Histórico de versões

### [0.0.1] - 23/09/2023
#### Adicionado
- Adicionado arquivos iniciais
