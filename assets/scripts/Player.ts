
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property
    public jumpHeight = 0;
    @property
    public jumpDuration = 0;
    @property
    public maxMoveSpeed = 0;
    @property
    public accel = 0;

    start () {
        // [3]
    }

    update (deltaTime: number) {
        // [4]
    }

//     runJumpAction () {
//         console.log("runJumpAction");
//         // Jump up
//         var jumpUp = cc.tween().by(this.jumpDuration, {y: this.jumpHeight}, {easing: 'sineOut'});
//         // Jump down
//         var jumpDown = cc.tween().by(this.jumpDuration, {y: -this.jumpHeight}, {easing: 'sineIn'});

//         // Create a easing and perform actions in the order of "jumpUp", "jumpDown"
//         var tween = cc.tween().sequence(jumpUp, jumpDown);
//         // Repeat
//         return cc.tween().repeatForever(tween);
//     }

//     onLoad() {
//         console.log("onLoad");
//         // Initialize the jump action
//         var jumpAction = this.runJumpAction();
//         cc.tween(this.node).then(jumpAction).start()
//     }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
