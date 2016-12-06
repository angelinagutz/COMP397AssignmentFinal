module objects {
    export class Tile extends objects.GameObject {

        constructor(imgString : string) {
            super(imgString);
            this.start();
            
        }

        public update() : void {

        }
        
        public setPosition(position : objects.Vector2) {
            this.x = position.x;
            this.y = position.y;
        }
        }

    }
