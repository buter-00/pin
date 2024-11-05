document.addEventListener("DOMContentLoaded", () => {
    // Инициализация Interact.js для перетаскивания контейнеров
    interact('.columns-dropzone').dropzone({
        accept: '.list-container',
        overlap: 0.5,
        ondropactivate: function (event) {
            event.target.classList.add('drop-active');
        },
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            dropzoneElement.classList.add('drop-target');
            draggableElement.classList.add('can-drop');
        },
        ondragleave: function (event) {
            event.target.classList.remove('drop-target');
            event.relatedTarget.classList.remove('can-drop');
        },
        ondrop: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            dropzoneElement.appendChild(draggableElement);
        },
        ondropdeactivate: function (event) {
            event.target.classList.remove('drop-active');
            event.target.classList.remove('drop-target');
        }
    });

    interact('.list-container')
        .draggable({
            inertia: true,
            autoScroll: true,
            onmove: dragMoveListener,
            onend: function (event) {
                var textEl = event.target.querySelector('p');
                textEl && (textEl.textContent = 'moved a distance of ' +
                    (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                        Math.pow(event.pageY - event.y0, 2) | 0))
                        .toFixed(2) + 'px');
            }
        });

    function dragMoveListener(event) {
        var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }

    // Make dragMoveListener available globally
    window.dragMoveListener = dragMoveListener;

    // Добавляем новые контейнеры
    document.getElementById('addContainerButton').addEventListener('click', () => {
        const containerName = prompt("Введите название контейнера:");
        if (containerName) {
            const newContainer = document.createElement('div');
            newContainer.classList.add('list-container');
            newContainer.setAttribute('draggable', 'true');
            newContainer.innerHTML = `
                <div class="links-container">
                    <div class="links-container-header">
                        <div class="links-container-title">${containerName}</div>
                        <div class="title-btns">
                            <span class="btn"><i class="fa fa-fw fa-ellipsis-v"></i></span>
                        </div>
                    </div>
                    <div class="links-container-body">
                        <div class="dropArea" style="max-width: 286.66px;">
                            <div title="New Link" class="link">
                                <img src=" ">New Link
                            </div>
                        </div>
                    </div>
                </div>
            `;
            const dropzones = document.querySelectorAll('.columns-dropzone');
            const totalContainers = document.querySelectorAll('.list-container').length;
            if (totalContainers < 10) {
                dropzones[totalContainers % 6].appendChild(newContainer);
                interact(newContainer).draggable({
                    inertia: true,
                    autoScroll: true,
                    onmove: dragMoveListener
                });
            } else {
                alert("Максимум 10 контейнеров.");
            }
        }
    });
});
