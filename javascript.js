/*Permite que execute ações específicas em JavaScript assim que
a estrutura básica da página HTML estiver pronta. útil para manipular
 elementos da página ou executar operações quando o HTML estiver disponível
 para interação.*/
document.addEventListener('DOMContentLoaded', function () {

    /*Este trecho de código é uma série de buscas por elementos no HTML usando
     seus IDs únicos e armazenando referências a esses elementos em variáveis imutavies
     JavaScript.
     Essas referências podem então ser usadas posteriormente no código para interagir
     com esses elementos.*/
    const themeButton = document.getElementById('toggleThemeButton');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const tasksContainer = document.getElementById('tasks');
    const tasksDoneContainer = document.getElementById('tasksDone');

    // Inicializa uma variável chamada taskCount com o valor 0.
    let taskCount = 0;

    // Inicializa uma variável chamada doneCount com o valor 0.
    let doneCount = 0;


    /*Esses event listeners garantem que quando os botões associados
     a esses elementos forem clicados, as funções toggleTheme()
     e addTask() serão executadas, respectivamente.
     Isso permite a interatividade na página, onde o usuário pode
     alternar entre temas ou adicionar novas tarefas com base nas
     ações de clique nesses botões.*/
    themeButton.addEventListener('click', function () {
        toggleTheme();
    });

    addTaskButton.addEventListener('click', function () {
        addTask();
    });

    /*Basicamente, cada vez que a função toggleTheme() é chamada,
     ela alterna entre adicionar e remover as classes 'dark' e 'light'
     do elemento <body>. Isso faz com que a aparência da página mude
     entre os dois temas alternativos sempre que a função é executada. */
    function toggleTheme() {
        const body = document.body;
        body.classList.toggle('dark');
        body.classList.toggle('light');

        // Obtém o contêiner principal
        const container = document.querySelector('.container');

    }

    function addTask() {
        // Obtém o texto da tarefa do elemento de entrada (input) e remove espaços em branco do início e do fim
        const taskText = taskInput.value.trim();

        // Verifica se o texto da tarefa não está vazio
        if (taskText !== '') {

            // Cria um novo elemento div para a tarefa
            const taskDiv = document.createElement('div');

            // Adiciona a classe 'task' ao novo elemento div
            taskDiv.classList.add('task');

            // Cria um novo elemento div para o texto da tarefa
            const newTask = document.createElement('div');

            // Define o texto do novo elemento div como o texto da tarefa
            newTask.textContent = taskText;

            // Cria um novo elemento div para as ações da tarefa
            const taskActions = document.createElement('div');

            // Adiciona a classe 'task-actions' ao novo elemento div
            taskActions.classList.add('task-actions');

            const deleteButton = document.createElement('button'); // Cria um elemento de botão
            deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #99c6cc;"></i>'; // Define o conteúdo HTML do botão como um ícone estilizado de lixeira
            deleteButton.addEventListener('click', function () { // Adiciona um evento de clique ao botão
                deleteTask(taskDiv); // Chama uma função quando o botão é clicado
            });


            // Cria um novo elemento botão para a edição da tarefa
            const editButton = document.createElement('button'); // Adiciona o botão de edição
            // Define o conteúdo HTML do botão de edição como um ícone de lápis estilizado
            editButton.innerHTML = '<i class="fa-solid fa-pencil" style="color: #99c6cc;"></i>'; // Define o ícone ou texto para representar a edição
            editButton.addEventListener('click', function () {
                // Adiciona um evento de clique ao botão de edição que chama a função editTask() passando o elemento div da nova tarefa como argumento
                editTask(newTask);
            });
            // Cria um novo elemento botão para marcar a tarefa como concluída
            const doneButton = document.createElement('button');
            // Define o conteúdo HTML do botão como um ícone de marca de verificação estilizado
            doneButton.innerHTML = '<i class="fa-solid fa-check" style="color: #99c6cc;"></i></i>';
            doneButton.addEventListener('click', function () {
                // Adiciona um evento de clique ao botão de conclusão que chama a função completeTask() passando o elemento div da tarefa como argumento
                completeTask(taskDiv);
            });

            // Adiciona o botão de exclusão/edição/adicionar ao conjunto de ações da tarefa
            taskActions.appendChild(deleteButton);
            taskActions.appendChild(editButton);
            taskActions.appendChild(doneButton);
            // Adiciona o elemento de texto da tarefa ao elemento div da tarefa
            taskDiv.appendChild(newTask);
            taskDiv.appendChild(taskActions);
            // Adiciona o elemento div da tarefa ao contêiner de tarefas no documento HTML
            tasksContainer.appendChild(taskDiv);
            // Incrementa o contador de tarefas
            taskCount++;
            // Atualiza o texto do elemento com o ID 'taskCount' para exibir o novo número de tarefas
            document.getElementById('taskCount').textContent = taskCount;
            // Limpa o valor do campo de entrada de tarefas
            taskInput.value = '';
        }
    }

    function deleteTask(task) {
        // Remove o elemento da tarefa do seu pai (provavelmente o contêiner de tarefas)
        task.parentNode.removeChild(task);
        // Decrementa o contador de tarefas
        taskCount--;
        // Atualiza o texto do elemento com o ID 'taskCount' para refletir o novo número de tarefas
        document.getElementById('taskCount').textContent = taskCount;
    }

    function completeTask(task) {
        // Adiciona a classe 'task-done' ao elemento da tarefa, que provavelmente contém estilos CSS para indicar que a tarefa foi concluída
        task.classList.add('task-done');
        // Move o elemento da tarefa para um contêiner de tarefas concluídas (presumivelmente definido anteriormente no código)
        tasksDoneContainer.appendChild(task);
        // Incrementa o contador de tarefas concluídas
        doneCount++;
        // Atualiza o texto do elemento com o ID 'doneCount' para refletir o novo número de tarefas concluídas
        document.getElementById('doneCount').textContent = doneCount;
        // Decrementa o contador de tarefas
        taskCount--;
        // Atualiza o texto do elemento com o ID 'taskCount' para refletir o novo número de tarefas
        document.getElementById('taskCount').textContent = taskCount;
    }

    function editTask(taskElement) {
        // Prompt para solicitar ao usuário que insira o novo texto da tarefa, com o texto atual preenchido como valor padrão
        const newText = prompt('Enter new task text:', taskElement.textContent);
        // Verifica se o usuário não cancelou a operação e se o novo texto não está vazio depois de remover os espaços em branco do início e do fim
        if (newText !== null && newText.trim() !== '') {
            // Atualiza o texto do elemento da tarefa para o novo texto inserido pelo usuário
            taskElement.textContent = newText;
        }
    }
});
