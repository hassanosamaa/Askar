import DoaCard from "@/components/routerCom/DoaCard";

type Idd={
    params:any
}
export default function dd({params}:Idd){
    return(
        <DoaCard id={params.d}/>
    )
}