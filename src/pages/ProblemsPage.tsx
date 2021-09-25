import { Component, For, createResource } from "solid-js";
import { IProblem } from "../models/problems/typs";

const ProblemsPage: Component = () => {
  const [problems] = createResource<IProblem[]>(() =>
    fetch("https://stocktop100api.herokuapp.com/api/v1/admin/problems")
      .then((res) => res.json())
  );

  return (
    <div class="flex-1 bg-gray-600 py-4" >
      <For each={problems()}>
        {(problem) =>
          <div class="p-4 border-b border-solid border-gray-800 h-12 flex flex-row items-center justify-between">
            <strong class="w-14 text-gray-50">{problem.ticker}</strong>
            <p>{problem.message}</p>
            <i class="fas fa-trash fill-current text-red-400 py-1"
              onClick={async () => {
                const response = await fetch(`https://stocktop100api.herokuapp.com/api/v1/admin/problems/${problem.id}`, {
                  method: 'DELETE'
                });
                console.log(' -response: ', response);
              }} />
          </div>
        }
      </For>
    </div>
  );
}

export default ProblemsPage