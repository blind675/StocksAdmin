import { Component } from "solid-js"
import { Link } from "solid-app-router";

export const TabBar: Component = () => {
    return (
        <div class="bg-blue-800 grid grid-cols-3 py-3 bottom-0 left-0 right-0 sticky" >
            <Link href='/' class=" border mx-3 flex flex-col justify-center">
                <i class="fas fa-exclamation fill-current text-white self-center py-1" ></i>
                <p >Problems</p>
            </Link>
            <Link href='/status' class="border mx-3 flex flex-col justify-center">
                <i class="fas fa-signal fill-current text-white self-center py-1"></i>
                <p >Status</p>
            </Link>
            <Link href='/stocks' class="border mx-3 flex flex-col justify-center">
                <i class="fas fa-chart-line fill-current text-white self-center py-1" ></i>
                <p >Stocks</p>
            </Link>
        </div>
    )
}