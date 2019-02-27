var ELEPHANT_FRAME = "elephant.png";
var FOX_FRAME = "fox.png";
var MOOSE_FRAME = "moose.png";
var GIRAFFE_FRAME = "giraffe.png";
var CROCODILE_FRAME = "crocodile.png";
var CHICKEN_FRAME = "chicken.png";
var PANDA_FRAME = "panda.png";
var BLOCK_FRAME = "block.png";

var height;
var width;
var shouldBeRemoved;

Animal = function(type, posX, posY) {
    this.animalType = type;
    this.posX = posX;
    this.posY = posY;
    this.sprite = PIXI.Sprite;
    this.create(true);
}
 
Animal.prototype = 
{
    setPosition : function(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.create(false);
    },

    create : function (newSprites) {
        switch(this.animalType)
        {
            case "elephant":
                if(newSprites)
                {
                    this.sprite = PIXI.Sprite.fromFrame(ELEPHANT_FRAME);
                    height = 60;
                    width = 60;
                }
                break;
            case 'fox':
                if(newSprites)
                {
                    this.sprite = PIXI.Sprite.fromFrame(FOX_FRAME);
                    height = 60;
                    width = 60;
                }               
                break;
            case 'moose':
                if(newSprites)
                {
                    this.sprite = PIXI.Sprite.fromFrame(MOOSE_FRAME);
                    height = 60;
                    width = 60;
                }
                break;
            case 'giraffe':
                if(newSprites)
                {
                    this.sprite = PIXI.Sprite.fromFrame(GIRAFFE_FRAME);
                    height = 90;
                    width = 30;
                }
                break;
            case 'crocodile':
                 if(newSprites)
                {
                    this.sprite = PIXI.Sprite.fromFrame(CROCODILE_FRAME);
                    height = 30;
                    width = 60;
                }
                break;
            case 'chicken':
                if(newSprites)
                {
                    this.sprite = PIXI.Sprite.fromFrame(CHICKEN_FRAME);
                    height = 30;
                    width = 30;
                }
                break;
            case 'panda':
                if(newSprites)
                {
                    this.sprite = PIXI.Sprite.fromFrame(PANDA_FRAME);
                    height = 60;
                    width = 30;
                }
                break;
        }
        
        this.sprite.position.x = this.posX;
        this.sprite.position.y = this.posY;
        this.sprite.anchor.set(0.5);

        if(newSprites) {
            var rotation = this.getRandomRotation();
            for(var i = 0; i < rotation; i++) {
                this.rotate();
            }

            app.stage.addChild(this.sprite);
        }
    },
    
    canMove : function(direction, previousBlocks)
    {
        switch(direction) {
            case "LEFT":
                var x = this.sprite.getBounds().x;
                if(x - 2 * (width / 2) < app.renderer.view.getBoundingClientRect().left + PLAY_AREA_PADDING) return false;

                for(var i = 0; i < previousBlocks.length; i++) {
                    if(hitTestRectangle(this.sprite, previousBlocks[i].sprite)) return false;
                }
                break;
            case "RIGHT":
                var x = this.sprite.getBounds().x;
                if( x + 5 * (width / 2) > app.renderer.view.getBoundingClientRect().right - PLAY_AREA_PADDING) return false;
                
                for(var i =0; i < previousBlocks.length; i++) {
                    if(hitTestRectangle(this.sprite, previousBlocks[i].sprite)) return false;
                }
                break;
            case "DOWN":
                var y = this.sprite.getBounds().y;
                if( y + 3 * ( height / 2 ) > app.renderer.view.getBoundingClientRect().bottom) return false;
                
                for(var i =0; i < previousBlocks.length; i++) {
                    if(hitTestRectangle(this.sprite, previousBlocks[i].sprite)){
                        if (this.animalType === previousBlocks[i].animalType){
                            app.stage.removeChild(previousBlocks[i].sprite);
                            previousBlocks.splice(i, 1);
                            this.shouldBeRemoved = true;
                        }
                        return false;
                    }
                }
                break;
            default:return false;
        }
        return true;
    },
    
    move : function(direction) {
        switch(direction)
        {
            case "LEFT":
                this.sprite.position.x -= 30;
                break;
            case "RIGHT":
                this.sprite.position.x += 30;
                break;
            case "DOWN":
                this.sprite.position.y += 15;
                break;
        }
        return;
    },
    
    canRotate : function(previousBlocks) {
        // TODO: simulate the rotation and check if the rotation is possible.
        return true;
    },

    rotate : function() {
        this.sprite.rotation += 1.5708;
    },

    hasSameType : function(previousBlocks) {
        if (this.animalType === previousBlocks.animalType){
            return true;
        }
    },

    getRandomRotation : function() {
        return Math.floor(Math.random() * 3);
    },
};

