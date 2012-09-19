function Vector3D()
{
	this.x = 0;
	this.y = 0;
	this.z = 0;
};/*
Vector3D.prototype.magnitude = function()
{
	return Math.sqrt( (x) + (y) + (z) );
};
Vector3D.prototype.divideBy = function(value)
{
	var newVec = new Vector3D();
	
	newVec.x = this.x/value;
	newVec.y = this.y/value;
	newVec.z = this.z/value;
	
	return newVec;
};
Vector3D.prototype.asUnitVector = function()
{
	return this.divideBy(this.magnitude());
};
Vector3D.prototype.rotateX(value)
{
	var newVec = new Vector3D();
	
	newVec.x = this.x;
	newVec.y = this.y*Math.cos(value) - this.z*Math.sin(value);
	newVec.z = this.y*Math.sin(value) + this.z*Math.cos(value);
	
	return newVec;
};
Vector3D.prototype.rotateY(value)
{
	var newVec = new Vector3D();
	
	newVec.x = this.z*Math.sin(value) + this.x*Math.cos(value);
	newVec.y = this.y;
	newVec.z = this.z*Math.cos(value) - this.x*Math.sin(value);
	
	return newVec;
};
Vector3D.prototype.rotateZ(value)
{
	var newVec = new Vector3D();
	
	newVec.x = this.x*Math.cos(value) - this.y*Math.sin(value);
	newVec.y = this.x*Math.sin(value) + this.y*Math.cos(value);
	newVec.z = this.z;
	
	return newVec;
};*/