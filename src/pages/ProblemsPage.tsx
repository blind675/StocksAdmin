import { Component, For, createResource } from "solid-js";
import { IProblem } from "../models/problems/typs";

const ProblemsPage: Component = () => {
  const [problems, { mutate: setProblems }] = createResource<IProblem[]>(() =>
    fetch("https://stocktop100api.herokuapp.com/api/v1/admin/problems")
      .then((res) => res.json())
  );

  async function deleteProblem(id: string) {
    const response = await fetch(`https://stocktop100api.herokuapp.com/api/v1/admin/problems/${id}`, {
      method: 'DELETE'
    }).then((res) => res.json());
    const problemsList = problems();
    if (response.success && problemsList) {

      const index = problemsList.findIndex((problem) => problem.id === id);
      if (index && index > -1) {
        problemsList.splice(index, 1);
        setProblems([...problemsList]);
      }
    }
  }

  return (
    <div class="flex-1 bg-gray-600 py-4" >
      {problems.loading ? (
        <div class="flex items-center justify-center ">
          <div style="border-top-color:transparent"
            class="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
        </div>
      ) :
        (
          <For each={problems()}>
            {(problem) =>
              <div class="p-4 border-b border-solid border-gray-800 h-12 flex flex-row items-center justify-between">
                <strong class="w-14 text-gray-50">{problem.ticker}</strong>
                <p>{problem.message}</p>
                <i class="fas fa-trash fill-current text-red-400 py-1"
                  onClick={async () => deleteProblem(problem.id)} />
              </div>
            }
          </For>
        )}
    </div>
  );
}

export default ProblemsPage