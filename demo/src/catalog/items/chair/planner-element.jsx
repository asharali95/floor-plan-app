import * as Three from 'three';
import React from 'react';

const WIDTH = 55;
const DEPTH = 55;
const HEIGHT = 50;

const objectMaxLOD = makeObjectMaxLOD();
const objectMinLOD = makeObjectMinLOD();

function makeObjectMaxLOD(){

  let chair = new Three.Mesh();

  let LegGeometry = new Three.CylinderGeometry( 0.02, 0.02, 0.5, 32, 32 );
  let LegMaterial = new Three.MeshLambertMaterial( {color: 0xd9d7d7} );

  let leg1 = new Three.Mesh( LegGeometry, LegMaterial );
  leg1.rotation.x += Math.PI/2;
  leg1.position.z += 0.5/2;

  let leg2 = new Three.Mesh( LegGeometry, LegMaterial );
  leg2.rotation.x += Math.PI/2;
  leg2.position.z += 0.5/2;
  leg2.position.y += 0.4;

  let leg3 = new Three.Mesh( LegGeometry, LegMaterial );
  leg3.rotation.x += Math.PI/2;
  leg3.position.z += 0.5/2;
  leg3.position.x += 0.4;

  let leg4 = new Three.Mesh( LegGeometry, LegMaterial );
  leg4.rotation.x += Math.PI/2;
  leg4.position.z += 0.5/2;
  leg4.position.y += 0.4;
  leg4.position.x += 0.4;

  let leg5 = new Three.Mesh( LegGeometry, LegMaterial );
  leg5.rotation.x += Math.PI/2;
  leg5.position.z += 0.5*3/2;

  let leg6 = new Three.Mesh( LegGeometry, LegMaterial );
  leg6.rotation.x += Math.PI/2;
  leg6.position.z += 0.5*3/2;
  leg6.position.x += 0.4;

  let WoodMaterial = new Three.MeshLambertMaterial( {color: 0x9b8c75} );

  let roundedRectShape = new Three.Shape();

  let x=0;
  let y=0;
  let width=.5;
  let height=.48;
  let radius=0.05;

  roundedRectShape.moveTo( x, y + radius );
  roundedRectShape.lineTo( x, y + height - radius );
  roundedRectShape.quadraticCurveTo( x, y + height, x + radius, y + height );
  roundedRectShape.lineTo( x + width - radius, y + height) ;
  roundedRectShape.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
  roundedRectShape.lineTo( x + width, y + radius );
  roundedRectShape.quadraticCurveTo( x + width, y, x + width - radius, y );
  roundedRectShape.lineTo( x + radius, y );
  roundedRectShape.quadraticCurveTo( x, y, x, y + radius );

  let extrudeSettings = {
    steps: 2,
    depth: 0.03,
    bevelEnabled: false,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 1
  };

  let PlaneGeometry = new Three.ExtrudeGeometry( roundedRectShape, extrudeSettings );
  let plane = new Three.Mesh( PlaneGeometry, WoodMaterial ) ;

  plane.position.x += -0.05;
  plane.position.y += -0.04;
  plane.position.z += 0.5;

  let roundedRectShape2 = new Three.Shape();

  let x1=0;
  let y1=0;
  let width1=.45;
  let height1=.25;
  let radius1=0.05;

  roundedRectShape2.moveTo( x1, y1 + radius1 );
  roundedRectShape2.lineTo( x1, y1 + height1 - radius1 );
  roundedRectShape2.quadraticCurveTo( x1, y1 + height1, x1 + radius1, y1 + height1 );
  roundedRectShape2.lineTo( x1 + width1 - radius1, y1 + height1) ;
  roundedRectShape2.quadraticCurveTo( x1 + width1, y1 + height1, x1 + width1, y1 + height1 - radius1 );
  roundedRectShape2.lineTo( x1 + width1, y1 + radius1 );
  roundedRectShape2.quadraticCurveTo( x1 + width1, y1, x1 + width1 - radius1, y1 );
  roundedRectShape2.lineTo( x1 + radius1, y1 );
  roundedRectShape2.quadraticCurveTo( x1, y1, x1, y1 + radius1 );

  let extrudeSettings2 = {
    steps: 2,
    depth: 0.03,
    bevelEnabled: false,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 1
  };

  let backGeometry = new Three.ExtrudeGeometry( roundedRectShape2, extrudeSettings2 );
  let back = new Three.Mesh( backGeometry, WoodMaterial ) ;
  back.rotation.x += Math.PI/2;
  back.position.z += 0.5*12/8;
  back.position.y += 0.03;
  back.position.x += -0.025;

  chair.add(back);
  chair.add(plane);
  chair.add(leg1);
  chair.add(leg2);
  chair.add(leg3);
  chair.add(leg4);
  chair.add(leg5);
  chair.add(leg6);

  return chair
}

function makeObjectMinLOD(){
  let chair = new Three.Mesh();

  let LegGeometry = new Three.CylinderGeometry( 0.02, 0.02, 0.5, 8, 8 );
  let LegMaterial = new Three.MeshLambertMaterial( {color: 0xd9d7d7} );

  let leg1 = new Three.Mesh( LegGeometry, LegMaterial );
  leg1.rotation.x += Math.PI/2;
  leg1.position.z += 0.5/2;

  let leg2 = new Three.Mesh( LegGeometry, LegMaterial );
  leg2.rotation.x += Math.PI/2;
  leg2.position.z += 0.5/2;
  leg2.position.y += 0.4;

  let leg3 = new Three.Mesh( LegGeometry, LegMaterial );
  leg3.rotation.x += Math.PI/2;
  leg3.position.z += 0.5/2;
  leg3.position.x += 0.4;

  let leg4 = new Three.Mesh( LegGeometry, LegMaterial );
  leg4.rotation.x += Math.PI/2;
  leg4.position.z += 0.5/2;
  leg4.position.y += 0.4;
  leg4.position.x += 0.4;

  let leg5 = new Three.Mesh( LegGeometry, LegMaterial );
  leg5.rotation.x += Math.PI/2;
  leg5.position.z += 0.5*3/2;

  let leg6 = new Three.Mesh( LegGeometry, LegMaterial );
  leg6.rotation.x += Math.PI/2;
  leg6.position.z += 0.5*3/2;
  leg6.position.x += 0.4;

  let WoodMaterial = new Three.MeshLambertMaterial( {color: 0x9b8c75} );

  let roundedRectShape = new Three.Shape();

  let x=0;
  let y=0;
  let width=.5;
  let height=.48;
  let radius=0.025;

  roundedRectShape.moveTo( x, y + radius );
  roundedRectShape.lineTo( x, y + height - radius );
  roundedRectShape.quadraticCurveTo( x, y + height, x + radius, y + height );
  roundedRectShape.lineTo( x + width - radius, y + height) ;
  roundedRectShape.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
  roundedRectShape.lineTo( x + width, y + radius );
  roundedRectShape.quadraticCurveTo( x + width, y, x + width - radius, y );
  roundedRectShape.lineTo( x + radius, y );
  roundedRectShape.quadraticCurveTo( x, y, x, y + radius );

  let extrudeSettings = {
    steps: 2,
    depth: 0.03,
    bevelEnabled: false,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 1
  };

  let PlaneGeometry = new Three.ExtrudeGeometry( roundedRectShape, extrudeSettings );
  let plane = new Three.Mesh( PlaneGeometry, WoodMaterial ) ;

  plane.position.x += -0.05;
  plane.position.y += -0.04;
  plane.position.z += 0.5;

  let roundedRectShape2 = new Three.Shape();

  let x1=0;
  let y1=0;
  let width1=.45;
  let height1=.25;
  let radius1=0.025;

  roundedRectShape2.moveTo( x1, y1 + radius1 );
  roundedRectShape2.lineTo( x1, y1 + height1 - radius1 );
  roundedRectShape2.quadraticCurveTo( x1, y1 + height1, x1 + radius1, y1 + height1 );
  roundedRectShape2.lineTo( x1 + width1 - radius1, y1 + height1) ;
  roundedRectShape2.quadraticCurveTo( x1 + width1, y1 + height1, x1 + width1, y1 + height1 - radius1 );
  roundedRectShape2.lineTo( x1 + width1, y1 + radius1 );
  roundedRectShape2.quadraticCurveTo( x1 + width1, y1, x1 + width1 - radius1, y1 );
  roundedRectShape2.lineTo( x1 + radius1, y1 );
  roundedRectShape2.quadraticCurveTo( x1, y1, x1, y1 + radius1 );

  let extrudeSettings2 = {
    steps: 2,
    depth: 0.03,
    bevelEnabled: false,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 1
  };

  let backGeometry = new Three.ExtrudeGeometry( roundedRectShape2, extrudeSettings2 );
  let back = new Three.Mesh( backGeometry, WoodMaterial ) ;
  back.rotation.x += Math.PI/2;
  back.position.z += 0.5*12/8;
  back.position.y += 0.03;
  back.position.x += -0.025;

  chair.add(back);
  chair.add(plane);
  chair.add(leg1);
  chair.add(leg2);
  chair.add(leg3);
  chair.add(leg4);
  chair.add(leg5);
  chair.add(leg6);

  return chair
}

export default {
  name: "sedia",
  prototype: "items",

  info: {
    tag: ['furnishings', 'wood'],
    title: "chair",
    description: "chair",
    image: require('./chair.png')
  },

  properties: {
    altitude: {
      label: "altitude",
      type: "length-measure",
      defaultValue: {
        length: 0,
        unit: 'cm'
      }
    }
  },

  render2D: function (element, layer, scene) {

    let angle = element.rotation + 90;

    let textRotation = 0;
    if (Math.sin(angle * Math.PI / 180) < 0) {
      textRotation = 180;
    }

    // return (
    //   <g transform={ `translate(${-WIDTH / 2},${-DEPTH / 2})`}>
    //     <rect key="1" x="0" y="0" width={WIDTH} height={DEPTH}
    //       style={{stroke: element.selected ? '#0096fd' : '#000', strokeWidth: "2px", fill: "#84e1ce"}}/>
    //     <text key="2" x="0" y="0"
    //       transform={ `translate(${WIDTH / 2}, ${DEPTH / 2}) scale(1,-1) rotate(${textRotation})`}
    //       style={ {textAnchor: "middle", fontSize: "11px"}}>
    //     {element.type}
    //     </text>
    //   </g>
    // )
    return (
      <g transform={ `translate(${-WIDTH / 2},${-DEPTH / 2})`}>
        <path width={WIDTH} height={DEPTH}  fill="#121212" opacity="1.000000" stroke="none"
	d="
M116.000000,21.000000
	C116.000000,40.354229 116.000000,59.708454 115.623962,79.589180
	C113.579964,80.776291 111.912010,81.436913 110.244858,82.099548
	C107.946869,95.276520 100.777740,101.300461 87.351715,101.306641
	C68.225014,101.315430 49.094921,101.499107 29.974306,101.157959
	C25.864069,101.084633 21.361658,99.841751 17.792511,97.813332
	C11.883722,94.455284 9.142835,88.532875 8.730236,83.202248
	C5.794183,80.989876 3.817468,79.500389 1.895065,77.544312
	C1.919169,59.046902 1.888961,41.016075 2.044269,22.645975
	C4.226839,21.422764 6.181571,20.421110 8.231460,19.684132
	C10.904502,18.723110 13.652966,17.971876 16.757769,17.009912
	C11.473358,9.061879 12.336024,5.066853 19.446671,1.877735
	C46.281063,1.902407 72.650002,1.858625 99.358177,1.932835
	C105.649437,5.570254 106.255363,8.486408 101.963806,17.023424
	C105.093315,17.947393 107.983345,18.819914 110.885483,19.650152
	C112.580330,20.135017 114.294518,20.552309 116.000000,21.000000
M98.508301,19.742987
	C98.977348,19.143412 99.446404,18.543837 99.915459,17.944263
	C98.667755,17.640684 97.420601,17.074932 96.172256,17.072273
	C71.701454,17.020145 47.230457,17.012709 22.759735,17.081448
	C21.168768,17.085918 19.579735,17.778454 17.989801,18.150927
	C17.819513,18.562958 17.649223,18.974989 17.478933,19.387020
	C23.602957,19.548555 23.881693,23.342482 23.849417,27.647909
	C23.743349,41.796963 23.809526,55.947304 23.810019,70.097153
	C23.810400,81.066780 23.810539,81.063309 12.990963,81.643684
	C12.716270,81.658432 12.457310,81.966454 12.197597,82.147934
	C12.275853,90.437271 18.565720,97.865364 26.851526,97.985008
	C48.650021,98.299767 70.460350,98.301659 92.257629,97.933678
	C100.493088,97.794647 106.746140,90.074432 106.497139,81.534309
	C105.554672,81.534309 104.598000,81.544647 103.641609,81.532684
	C95.287804,81.428246 94.685936,80.832825 94.710030,72.269379
	C94.753113,56.956669 94.729218,41.642059 95.021065,26.333729
	C95.061775,24.198174 96.734222,22.093729 98.508301,19.742987
M20.725557,27.767532
	C20.589283,26.201796 20.453009,24.636061 20.317030,23.073723
	C14.945832,23.073723 10.179252,23.073723 4.753501,23.073723
	C4.753501,38.243698 4.762019,53.193047 4.750587,68.142380
	C4.742608,78.577072 4.732433,78.414200 15.385501,78.546913
	C19.450163,78.597549 20.891615,77.475075 20.820642,73.203545
	C20.574320,58.378414 20.725546,43.546680 20.725557,27.767532
M97.773781,53.499908
	C97.773781,61.581467 97.773781,69.663025 97.773781,78.463776
	C101.829849,78.463776 105.279205,78.284569 108.701576,78.511803
	C112.480003,78.762680 113.967361,77.606987 113.888115,73.492386
	C113.632164,60.201904 113.792946,46.903400 113.793030,33.607986
	C113.793106,22.304770 113.794060,22.422071 102.331001,22.520391
	C98.918579,22.549660 97.621147,23.531282 97.707199,27.074039
	C97.912956,35.544868 97.773727,44.024078 97.773781,53.499908
M37.500671,4.968765
	C31.848101,4.971386 26.167448,4.665274 20.561018,5.175206
	C18.992287,5.317890 16.463959,7.899235 16.503643,9.301705
	C16.548708,10.894336 18.887459,12.523286 20.431963,13.910587
	C20.895351,14.326813 22.037472,13.993258 22.868650,13.993298
	C46.975342,13.994466 71.082161,13.955723 95.188576,14.036603
	C98.761925,14.048592 101.754311,13.487932 101.713669,9.231937
	C101.674400,5.118670 98.650352,4.911637 95.358696,4.926587
	C76.406235,5.012663 57.453190,4.968671 37.500671,4.968765
z"/>
<path fill="#F2F2F2" opacity="1.000000" stroke="none"
	d="
M1.840753,78.010895
	C3.817468,79.500389 5.794183,80.989876 8.730236,83.202248
	C9.142835,88.532875 11.883722,94.455284 17.792511,97.813332
	C21.361658,99.841751 25.864069,101.084633 29.974306,101.157959
	C49.094921,101.499107 68.225014,101.315430 87.351715,101.306641
	C100.777740,101.300461 107.946869,95.276520 110.244858,82.099548
	C111.912010,81.436913 113.579964,80.776291 115.623962,80.057838
	C116.000000,87.646034 116.000000,95.292061 116.000000,102.969048
	C77.790489,102.969048 39.580952,102.969048 1.000000,102.969048
	C1.000000,94.982941 1.000000,86.960144 1.210085,78.479370
	C1.420170,78.021393 1.840753,78.010895 1.840753,78.010895
z"/>
<path fill="#F9F9F9" opacity="1.000000" stroke="none"
	d="
M18.981222,1.809281
	C12.336024,5.066853 11.473358,9.061879 16.757769,17.009912
	C13.652966,17.971876 10.904502,18.723110 8.231460,19.684132
	C6.181571,20.421110 4.226839,21.422764 1.829390,22.638554
	C1.428995,22.970406 1.000000,23.000000 1.000000,23.000000
	C1.000000,15.748246 1.000000,8.496491 1.000000,1.000000
	C6.684539,1.000000 12.372561,1.000000 18.522703,1.202253
	C18.984823,1.404506 18.981222,1.809281 18.981222,1.809281
z"/>
<path fill="#FAFAFA" opacity="1.000000" stroke="none"
	d="
M116.000000,20.530956
	C114.294518,20.552309 112.580330,20.135017 110.885483,19.650152
	C107.983345,18.819914 105.093315,17.947393 101.963806,17.023424
	C106.255363,8.486408 105.649437,5.570254 99.356186,1.729060
	C99.014969,1.407294 99.000000,1.000000 99.000000,1.000000
	C104.598656,1.000000 110.197304,1.000000 116.000000,1.000000
	C116.000000,7.352935 116.000000,13.707425 116.000000,20.530956
z"/>
<path fill="#E6E6E6" opacity="1.000000" stroke="none"
	d="
M98.531342,1.000000
	C99.000000,1.000000 99.014969,1.407294 99.016953,1.611068
	C72.650002,1.858625 46.281063,1.902407 19.446671,1.877735
	C18.981222,1.809281 18.984823,1.404506 18.992413,1.202253
	C45.354229,1.000000 71.708458,1.000000 98.531342,1.000000
z"/>
<path fill="#E6E6E6" opacity="1.000000" stroke="none"
	d="
M1.000000,23.468658
	C1.000000,23.000000 1.428995,22.970406 1.643874,22.977825
	C1.888961,41.016075 1.919169,59.046902 1.895065,77.544312
	C1.840753,78.010895 1.420170,78.021393 1.210085,78.010696
	C1.000000,59.979103 1.000000,41.958210 1.000000,23.468658
z"/>
<path fill="#FEFEFE" opacity="1.000000" stroke="none"
	d="
M98.079811,19.858934
	C96.734222,22.093729 95.061775,24.198174 95.021065,26.333729
	C94.729218,41.642059 94.753113,56.956669 94.710030,72.269379
	C94.685936,80.832825 95.287804,81.428246 103.641609,81.532684
	C104.598000,81.544647 105.554672,81.534309 106.497139,81.534309
	C106.746140,90.074432 100.493088,97.794647 92.257629,97.933678
	C70.460350,98.301659 48.650021,98.299767 26.851526,97.985008
	C18.565720,97.865364 12.275853,90.437271 12.194304,82.142815
	C12.457310,81.966454 12.716270,81.658432 12.990963,81.643684
	C23.810539,81.063309 23.810400,81.066780 23.810019,70.097153
	C23.809526,55.947304 23.743349,41.796963 23.849417,27.647909
	C23.881693,23.342482 23.602957,19.548555 17.478933,19.387020
	C17.649223,18.974989 17.819513,18.562958 17.989801,18.150927
	C19.579735,17.778454 21.168768,17.085918 22.759735,17.081448
	C47.230457,17.012709 71.701454,17.020145 96.172256,17.072273
	C97.420601,17.074932 98.667755,17.640684 99.915459,17.944263
	C99.446404,18.543837 98.977348,19.143412 98.079811,19.858934
z"/>
<path fill="#F8F8F8" opacity="1.000000" stroke="none"
	d="
M20.725548,28.242495
	C20.725546,43.546680 20.574320,58.378414 20.820642,73.203545
	C20.891615,77.475075 19.450163,78.597549 15.385501,78.546913
	C4.732433,78.414200 4.742608,78.577072 4.750587,68.142380
	C4.762019,53.193047 4.753501,38.243698 4.753501,23.073723
	C10.179252,23.073723 14.945832,23.073723 20.317030,23.073723
	C20.453009,24.636061 20.589283,26.201796 20.725548,28.242495
z"/>
<path fill="#F9F9F9" opacity="1.000000" stroke="none"
	d="
M97.773781,52.999908
	C97.773727,44.024078 97.912956,35.544868 97.707199,27.074039
	C97.621147,23.531282 98.918579,22.549660 102.331001,22.520391
	C113.794060,22.422071 113.793106,22.304770 113.793030,33.607986
	C113.792946,46.903400 113.632164,60.201904 113.888115,73.492386
	C113.967361,77.606987 112.480003,78.762680 108.701576,78.511803
	C105.279205,78.284569 101.829849,78.463776 97.773781,78.463776
	C97.773781,69.663025 97.773781,61.581467 97.773781,52.999908
z"/>
<path fill="#FDFDFD" opacity="1.000000" stroke="none"
	d="
M38.000507,4.968765
	C57.453190,4.968671 76.406235,5.012663 95.358696,4.926587
	C98.650352,4.911637 101.674400,5.118670 101.713669,9.231937
	C101.754311,13.487932 98.761925,14.048592 95.188576,14.036603
	C71.082161,13.955723 46.975342,13.994466 22.868650,13.993298
	C22.037472,13.993258 20.895351,14.326813 20.431963,13.910587
	C18.887459,12.523286 16.548708,10.894336 16.503643,9.301705
	C16.463959,7.899235 18.992287,5.317890 20.561018,5.175206
	C26.167448,4.665274 31.848101,4.971386 38.000507,4.968765
z"/>
      </g>
    )
  },


  render3D: function (element, layer, scene) {

    let newAltitude = element.properties.get('altitude').get('length');

    /************** lod max *********************/

    let chair1 = new Three.Object3D();
    chair1.add(objectMaxLOD.clone());

    let aa = new Three.Box3().setFromObject(chair1);

    let deltaX = Math.abs(aa.max.x - aa.min.x);
    let deltaY = Math.abs(aa.max.y - aa.min.y);
    let deltaZ = Math.abs(aa.max.z - aa.min.z);

    chair1.rotation.x+= -Math.PI/2;
    chair1.position.y+= newAltitude;
    chair1.position.x+= -WIDTH/3.5;
    chair1.position.z+= DEPTH/4;
    chair1.scale.set( 1.5*WIDTH / deltaZ,DEPTH/1.5 / deltaX, HEIGHT / deltaY);

    /************** lod min *********************/

    let chair0 = new Three.Object3D();
    chair0.add(objectMinLOD.clone());
    chair0.rotation.x+= -Math.PI/2;
    chair0.position.y+= newAltitude;
    chair0.position.x+= -WIDTH/3.5;
    chair0.position.z+= DEPTH/4;
    chair0.scale.set( 1.5*WIDTH / deltaZ,DEPTH/1.5 / deltaX, HEIGHT / deltaY);


    /**** all level of detail ***/

    let lod = new Three.LOD();

    lod.addLevel(chair1, 200);
    lod.addLevel(chair0, 900);
    lod.updateMatrix();
    lod.matrixAutoUpdate = false;

    if (element.selected) {
      let bbox = new Three.BoxHelper(lod, 0x99c3fb);
      bbox.material.linewidth = 5;
      bbox.renderOrder = 1000;
      bbox.material.depthTest = false;
      lod.add(bbox);
    }

    return Promise.resolve(lod);
    }

};
