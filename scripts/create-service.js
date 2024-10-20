const fs = require('fs-extra');
const path = require('path');

// Получаем аргументы из командной строки
const serviceName = process.argv[2]; // 'books', например

if (!serviceName) {
  console.error('Укажите имя сервиса: yarn create-service <service-name>');
  process.exit(1);
}

// Определяем путь, куда будет создана структура папок
const baseDir = path.join(__dirname, '..', 'app', 'services', serviceName);

const createServiceIndex = (serviceName) => () => {
  return `
    import { ${serviceName}Model } from "./${serviceName}Service";
    
    export const ${serviceName}Service = {
      model: ${serviceName}Model,
    };
  `;
}

const createServiceModel = (serviceName) => () => {
  return `
  const outputs = {
    // Define your service outputs here
  };

  const inputs = {
    // Define your service inputs here
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

    // Создаем файлы с шаблонами
    const files = {
      'index.ts': createServiceIndex(serviceName),
      [`${serviceName}_model.ts`]: createServiceModel(serviceName),
    };

    for (const [fileName, getContent] of Object.entries(files)) {
      const filePath = path.join(baseDir, fileName);
      await fs.writeFile(filePath, getContent(), 'utf-8');
      console.log(`Created: ${filePath}`);
    }

    console.log(`Service "${serviceName}" successfully created!`);
  } catch (error) {
    console.error('Error creating service:', error);
  }
}

createService();
