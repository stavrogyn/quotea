const fs = require('fs-extra');
const path = require('path');

// Получаем аргументы из командной строки
const serviceName = process.argv[2]; // 'books', например

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

if (!serviceName) {
  console.error('Укажите имя сервиса: yarn create-service <service-name>');
  process.exit(1);
}

// Определяем путь, куда будет создана структура папок
const baseDir = path.join(__dirname, '..', 'app', 'services', serviceName);

const containerDir = path.join(__dirname, '..', 'app', 'services', serviceName, 'containers');

const componentsDir = path.join(__dirname, '..', 'app', 'services', serviceName, 'components');

const utilsDir = path.join(__dirname, '..', 'app', 'services', serviceName, 'utils');

const capotalizedServiceName = capitalizeFirstLetter(serviceName);

const createComponent = () => {
  return `
    import React from 'react';

    export const ${capotalizedServiceName}Component = () => {
      return (
        <div>
          ${serviceName}
        </div>
      );
    }
  `;
}

const createComponentsIndex = () => {
  return `
    export { ${capotalizedServiceName}Component } from './${serviceName}';
  `;
}

const createContainer = () => {
  return `
    import React from 'react';
    import { ${capotalizedServiceName}Component } from '../components';
    
    export const ${capotalizedServiceName}Container = () => {
      return (
        <${capotalizedServiceName}Component />
      );
    }
  `;
}

const createContainersIndex = () => {
  return `
    export { ${capotalizedServiceName}Container } from './${serviceName}.container';
  `;
}

const createUtils = () => {
  return `
    export const get${capotalizedServiceName}Sum = () => {
      return 2 + 2;
    };
  `;
}

const createUtilsIndex = () => {
  return `
    export { get${capotalizedServiceName}Sum } from './${serviceName}_util';
  `;
}

const createServiceIndex = () => {
  return `
    import { ${serviceName}Model } from "./${serviceName}_model";
    
    export const ${serviceName}Service = {
      model: ${serviceName}Model,
    };
  `;
}

const createServiceModel = () => {
  return `
  import { createEvent, createStore, sample } from "effector";

  type ${capotalizedServiceName} = { name: string; };

  const $${serviceName}List = createStore<${capotalizedServiceName}[]>([]);

  const set${capotalizedServiceName} = createEvent<${capotalizedServiceName}>();

  sample({
    clock: set${capotalizedServiceName},
    source: $${serviceName}List,
    fn: (${serviceName}s, ${serviceName}) => [...${serviceName}s, ${serviceName}],
    target: $${serviceName}List
  })


  const outputs = {
    $${serviceName}List
  };

  const inputs = {
    set${capotalizedServiceName}
  };
  
  export const ${serviceName}Model = {
    outputs,
    inputs,
  }`;
}

// Функция для создания папок и файлов
async function createService() {
  try {
    // Создаем основную папку сервиса
    await fs.ensureDir(baseDir);
    await fs.ensureDir(containerDir);
    await fs.ensureDir(componentsDir);
    await fs.ensureDir(utilsDir);

    // Создаем файлы с шаблонами
    const files = [
      {
        fileName: 'index.ts',
        getContent: createServiceIndex,
        dir: baseDir,
      },
      {
        fileName: `${serviceName}_model.ts`,
        getContent: createServiceModel,
        dir: baseDir,
      },
      {
        fileName: 'index.ts',
        getContent: createComponentsIndex,
        dir: componentsDir,
      },
      {
        fileName: `${serviceName}.tsx`,
        getContent: createComponent,
        dir: componentsDir,
      },
      {
        fileName: 'index.ts',
        getContent: createContainersIndex,
        dir: containerDir,
      },
      {
        fileName: `${serviceName}.container.tsx`,
        getContent: createContainer,
        dir: containerDir,
      },
      {
        fileName: 'index.ts',
        getContent: createUtilsIndex,
        dir: utilsDir,
      },
      {
        fileName: `${serviceName}_util.ts`,
        getContent: createUtils,
        dir: utilsDir,
      },
    ];

    for (const { getContent, dir, fileName } of files) {
      const filePath = path.join(dir, fileName);
      await fs.writeFile(filePath, getContent(), 'utf-8');
      console.log(`Created: ${filePath}`);
    }

    console.log(`Service "${serviceName}" successfully created!`);
  } catch (error) {
    console.error('Error creating service:', error);
  }
}

createService();
