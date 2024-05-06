import AskarrCard from "@/components/routerCom/AskarrCard";


type Id={
    params:any,
    
}
export default function Askar({params}:Id){
    return(
        <AskarrCard id={params.a}/>
    )
}