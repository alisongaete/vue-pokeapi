<template>
    <div>
        <div class="row">
            <div class="col-6">
                <h5>Atk: {{atk}}</h5>
                <h5>Def: {{def}}</h5>
                <h5>Spd: {{spd}}</h5>
            </div>
            <div class="col-6">
                <h5>S.Atk: {{satk}}</h5>
                <h5>S.Def: {{sdef}}</h5>
                <h5>Hp: {{hp}}</h5>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'CardStats',
    props:{
        atk: {
            type: Number,
            default: 0
        },
        def: {
            type: Number,
            default: 0
        },
        spd: {
            type: Number,
            default: 0
        },
        satk: {
            type: Number,
            default: 0
        },
        sdef: {
            type: Number,
            default: 0
        },
        hp: {
            type: Number,
            default: 0
        }
    }
}
</script>